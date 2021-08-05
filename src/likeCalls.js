class LikeUpdate {
    likePost = async (likeId) => {
      const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/OVncPxdzhK1mzS0b7fjz/likes/', {
        cash: 'reload',
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
          item_id: likeId,
        }),
      }).then((response) => response.text());
      return response;
    }

    getLikes = async () => {
      const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/OVncPxdzhK1mzS0b7fjz/likes/', { cache: 'reload' });
      const mealInfo = await response.json();
      return mealInfo;
    }

    showLikes = async (element) => {
      this.getLikes().then((apiLikes) => {
        apiLikes.forEach((apilike) => {
          if (element.id === apilike.item_id) {
            element.nextElementSibling.innerHTML = `${apilike.likes} Likes`;
          }
        });
      });
    }

    likePostGet = async () => {
      const likebtn = document.querySelectorAll('.likeBtn');
      likebtn.forEach((element) => {
        element.addEventListener(('click'), () => {
          this.likePost(element.id);
          setTimeout(() => {
            this.showLikes(element);
          }, 2000);
          this.showLikes(element);
        });
        this.showLikes(element);
      });
    }
}

const likeCall = new LikeUpdate();

export { likeCall as default };