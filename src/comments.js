import modal from './modal'

class Comments {
    // APP ID wGa7mlp2XOLConTNWxUe
     form = document.querySelector('.comments');


    sendComment = async (id, user, info) => {
        const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/wGa7mlp2XOLConTNWxUe/comments', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                "item_id": id,
                "username": user,
                "comment": info,
            }),
        });
        const meals = await response.text();
        return meals;
    }

      newComment = async (id) => {
        // const modalWindow = document.querySelector('.modalholder');
        const submitBtn = document.querySelector('.comment-button');

        submitBtn.addEventListener('click', async (e) => {
            e.preventDefault();
            const user = document.querySelector('.name').value;
            const text = this.form.comment.value;
            // id = document.querySelector('.load-comment').id;
            // console.log(id);            
                await this.sendComment(id, user, text);
        })
      }

      getComments = async (dish) => {
        const id = await dish.querySelector('.load-comment').id;
        const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/wGa7mlp2XOLConTNWxUe/comments?item_id=${id}`);
        const info = await response.json();
        // console.log(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/wGa7mlp2XOLConTNWxUe/comments?item_id=${id}`);
        return info
      }
      
      updateComments = async () => {
        const id = await document.querySelector('.modalholder').id;
        const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/wGa7mlp2XOLConTNWxUe/comments?item_id=${id}`);
        const info = await response.json();
        console.log(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/wGa7mlp2XOLConTNWxUe/comments?item_id=${id}`);
        return info
      }

      createComment = (data) => {
        let container = document.querySelector('.comments-cont');
        const { comment, creation_date, username } = data;
        const newScore = document.createElement('li');
        newScore.innerHTML = `${creation_date} ${username}: ${comment}`;
        container.appendChild(newScore);
      }

      appendComment = async (data) => {
          data.forEach(element => {
              this.createComment(element)
          });
      }

      appendCount = async (count) => {
          document.querySelector('.comments-count').innerText = `(${count})`;
      }
}
const comments = new Comments()
export { comments as default }