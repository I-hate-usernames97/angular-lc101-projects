import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';
  takeOffEnabled = true;
  color = '#FF8B8B';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';

handleTakeOff() {
   let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
   if (result) {
      this.color = '#1ECBE1';
      this.height = 10000;
      this.width = 0;
      this.message = 'Shuttle in flight.';
      this.takeOffEnabled = false;

   }
}

endMission(result) {
   if (result) {
      this.color = '#FF8B8B';
      this.height = 0;
      this.width = 0;
      this.message = 'Space shuttle ready for takeoff!';
      this.takeOffEnabled = true;
   }
}


handleLand() {
   const result = window.confirm('Are you sure the shuttle is ready to land?');
   this.endMission(result);
}

handleAbort() {
   let result = window.confirm('Are you sure you want to abort the Mission?');
   this.endMission(result);
}

moveRocket(rocketImage, direction) {
   if (direction === 'right') {
      const movement = parseInt(rocketImage.style.left) + 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width + 10000;
   }

   if (direction === 'left') {
      const movement = parseInt(rocketImage.style.left) - 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width + 10000;
   }

   if (direction === 'down') {
      const movement = parseInt(rocketImage.style.bottom) - 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height - 10000;
   }

   if (direction === 'up') {
      const movement = parseInt(rocketImage.style.bottom) + 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height + 10000;
   }
}

}
