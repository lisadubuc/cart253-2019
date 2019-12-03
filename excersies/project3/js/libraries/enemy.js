class Enemy {
  // add constructor and all what the enemy needs in it
  constructor(enemyImage, enemyX, enemyY, enemySpeed, enemySize) {
    this.enemyImage = enemyImage;
    this.enemyX = enemyX;
    this.enemyY = enemyY;
    this.enemySpeed = enemySpeed;
    this.enemySize = enemySize;
    this.enemyVX = -5;
    this.collided = false;
    this.startTime = 0;
    this.timePassed = 0;
  }

  //for the position and image display of the enemys
  display() {
    image(this.enemyImage, this.enemyX, this.enemyY, this.enemySize, this.enemySize);
  }

  //what happens when a collision happens
  collision(avatarX, avatarY, avatarSize) {
    if (dist(this.enemyX, this.enemyY, avatarX, avatarY) < this.enemySize / 4 + avatarSize / 4) {
      // Tell the player they lost
      if (this.collided === false) {
        console.log("YOU LOSE!");
        explosion.x = this.enemyX;
        explosion.y = this.enemyY;

        this.collided = true;
        this.startTime = millis();
        this.timePassed = 0;
      }

    }
  }
  //the reset after a collision
  resetAfterCollision() {
    // Reset the enemy's position
    if (this.collided == true) {
      explosion.update();
      explosion.display();
      this.timePassed = millis() - this.startTime;

      if (this.timePassed > 2000) {
        this.enemyX = 0;
        this.enemyY = random(0, height);
        // Reset the avatar's position
        avatarX = width / 2;
        avatarY = height / 2;
        // Reset the dodge counter
        dodges = 0;
        // add reset for size and speed of enemy
        this.enemySpeed = random(5, 12);
        trackSpeed = 10;
        this.collided = false;
        explosion.sizeX = 50;
        explosion.sizeY = 50;

      }
    }

  }
  //the reset of game
  reset() {
    if (this.enemyX < 0) {
      // This means the player dodged so update its dodge statistic
      dodges = dodges + 1;
      // Tell them how many dodges they have made
      console.log(dodges + " DODGES!");
      // Reset the enemy's position to the left at a random height
      this.enemyX = width;
      this.enemyY = random(0, height);
      this.enemySpeed = this.enemySpeed + 1;
      trackSpeed += 5;
    }
  }
  //the update of the game
  update() {
    if (this.collided === false) {
      // The enemy always moves at enemySpeed
      this.enemyVX = -this.enemySpeed;
      // Update the enemy's position based on its velocity
      this.enemyX = this.enemyX + this.enemyVX;

    }

  }
}
