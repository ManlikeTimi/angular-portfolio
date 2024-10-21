import { AfterViewInit, Component } from '@angular/core';

import gsap from 'gsap';

@Component({
  selector: 'app-spinner-component',
  templateUrl: './spinner-component.component.html',
  styleUrls: ['./spinner-component.component.css']
})
export class SpinnerComponentComponent implements AfterViewInit {
  showSpinner = true;
  showHomeComponent = false;
  
  ngAfterViewInit() {
    const centerX = window.innerWidth / 2 - 50;
    const centerY = window.innerHeight / 2 - 50;

    // Animate the boxes moving to the center
    gsap.to('.top-box', { y: centerY, duration: 1.5, ease: "power2.out" });
    gsap.to('.right-box', { x: -(window.innerWidth / 2 - 50), duration: 1.5, ease: "power2.out" });
    gsap.to('.bottom-box', { y: -(window.innerHeight / 2 - 50), duration: 1.5, ease: "power2.out" });
    gsap.to('.left-box', { x: centerX, duration: 1.5, ease: "power2.out" });

    // After all animations complete, start the spinner effect
    gsap.delayedCall(1.6, startSpinner);

    function startSpinner() {
      // Rotate all boxes infinitely in a spinner effect
      gsap.to('.box', {
        rotation: 360,
        duration: 2,
        repeat: -1, // Infinite loop
        ease: "power2.inOut"
      });

      // Stop spinner and initiate exit animation after 3 seconds
      setTimeout(() => {
        stopSpinnerAndReturnBoxes();
      }, 4500); // Spinner lasts for 4.5 seconds
    }

    const stopSpinnerAndReturnBoxes = () => {
      // Smoothly stop the spinner by reducing rotation speed to 0
      gsap.to('.box', {
        rotation: 0,
        duration: 1.5,  // Smooth stop duration
        ease: "power2.inOut",
        onComplete: returnBoxesToOriginalPosition
      });
    };

    const returnBoxesToOriginalPosition = () => {
      // Animate boxes back to their original off-screen positions
      gsap.to('.top-box', {
        y: -window.innerHeight / 2-50, // Off-screen top
        duration: 1.5,
        ease: "power2.inOut"
      });

      gsap.to('.right-box', {
        x: -window.innerWidth / 5+50,  // Off-screen right
        duration: 1.5,
        ease: "power2.inOut"
      });

      gsap.to('.bottom-box', {
        y:- window.innerHeight / 3.5+50,  // Off-screen bottom
        duration: 1.5,
        ease: "power2.inOut"
      });

      gsap.to('.left-box', {
        x: -window.innerHeight / 2-50,  // Off-screen left
        duration: 1.5,
        ease: "power2.inOut"
      });

      // Add curtain effect on all sides to hide the content
      gsap.to('.box', {
        clipPath: 'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)', // Curtain-like removal
        duration: 1.5,
        ease: "power2.inOut",
        onComplete: loadHomeComponent
      });
    };

    const loadHomeComponent = () => {
      this.showSpinner = false;
      this.showHomeComponent = true;
    };

    gsap.to("body", {
      backgroundColor: "rgb(14 16 15)",
    })
  }
}
