class FollowToggle{
  constructor (el) {
    // debugger;
    this.$button = $(el);
    const data = this.$button.data("follow");
    this.userId = data["user-id"];
    this.followState = data["initial-follow-state"];
    // debugger;``

    this.render(); 
  }

  render() {
    let buttonText ="";

    if (this.followState) {
        buttonText = "unfollow"; 
    } else {
        buttonText = "follow"; 
    }

    this.$button.text(buttonText); 
  }

  handleClick() {
    this.$button.on('click', e => {
      e.preventDefault();

      // Make the appropriate request

      if (this.followState) {
          $.ajax({
              type: 'DELETE', 
              url: `/users/${followee_id}/follow` // WHERE DO WE GET THE FOLLOWEE ID?
              
              // need to include followee_id (aka :user_id)

              // twitter.com/users/40
              // followee_id =  40
              // follower_id = this.userId
          })
      } else {
        $.ajax({
            type: 'POST', 
            url: 
        })
      }
 


      this.render();
    })



  }
  
};


module.exports = FollowToggle; 