<template>
  <div class="banner">
    <div class="resize">
      <div class="resize__container" id="resizeMe">
        <div
          class="resize__right-side"
          :class="{ 'resize__right-side--active': isGrabbing }"
          @mousedown.prevent="mouseDownHandler"
          @touchstart="touchStartHandler"
        >
          <div class="resize__arrows">
            <div class="resize__arrows-text">déplace moi</div>
            <div class="resize__arrows-left">
              <font-awesome-icon :icon="['fas', 'arrow-left']" />
            </div>
            <div class="resize__arrows-right">
              <font-awesome-icon :icon="['fas', 'arrow-right']" />
            </div>
          </div>
        </div>
        <div class="resize__text-left">
          <h1 class="banner-title">
            &lt;<span class="title-1">Hello</span>
            <span class="title-2">World!</span> /&gt;
          </h1>
          <p>Je suis Pietro Ciccarello,</p>
          <p>développeur web front.</p>
        </div>
        <div class="resize__function-img">
          <img
            src="../assets/imgs/banner/functionText.png"
            alt="js function myDay"
            v-if="percentageWidth > 80"
          />
        </div>
      </div>
      <div class="resize__background">
        <div class="resize__text-left resize__text-left-back">
          <h1 class="banner-title">
            &lt;<span class="title-1 title-1-back">Hello</span>
            <span class="title-2 title-2-back">World!</span> /&gt;
          </h1>
          <p>Je suis Pietro Ciccarello,</p>
          <p>développeur web front.</p>
        </div>
        <img
          src="../assets/imgs/banner/Code-typing-bro-transparent-background.svg"
          alt="computer working"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TheBanner",
  data() {
    return {
      resizeBar: this.$refs.resizeBar,
      x: 0,
      touchX: 0,
      w: 0,
      touchW: 0,
      dx: 0,
      dxTouch: 0,
      percentageWidth: 0,
      isGrabbing: false,
    };
  },
  computed: {},
  mounted() {
    this.$nextTick(() => {
      this.getPercentageBanner();

      window.addEventListener("resize", () => {
        this.getPercentageBanner();
      });
    });
  },
  methods: {
    touchStartHandler(e) {
      this.isGrabbing = true;
      //get current position of the mouse

      this.touchX = e.touches[0].clientX;

      const resizeContainer = document.getElementById("resizeMe");

      //calculate the dimension of the div
      const styles = window.getComputedStyle(resizeContainer);

      this.w = parseInt(styles.width, 10);

      //attach the listner to the document
      document.addEventListener("touchmove", this.mouseMoveHandler);
      document.addEventListener("touchend", this.mouseUpHandler);
    },
    mouseDownHandler(e) {
      this.isGrabbing = true;

      //get current position of the mouse

      this.x = e.clientX;

      const resizeContainer = document.getElementById("resizeMe");

      //calculate the dimension of the div
      const styles = window.getComputedStyle(resizeContainer);

      this.w = parseInt(styles.width, 10);

      //attach the listner to the document
      document.addEventListener("mousemove", this.mouseMoveHandler);
      document.addEventListener("touchmove", this.touchMoveHandler);
      document.addEventListener("mouseup", this.mouseUpHandler);
      document.addEventListener("touchend", this.mouseUpHandler);
    },
    touchMoveHandler(e) {
      const resizeContainer = document.getElementById("resizeMe");

      this.getPercentageBanner();
      //calculate till where the div can be moved
      this.dxTouch = e.touches[0].clientX - this.touchX;

      //adjust the dimension of the element
      resizeContainer.style.width = `${this.touchW + this.dxTouch}px`;
    },
    mouseMoveHandler(e) {
      const resizeContainer = document.getElementById("resizeMe");

      this.getPercentageBanner();
      //calculate till where the div can be moved
      this.dx = e.clientX - this.x;

      //adjust the dimension of the element
      resizeContainer.style.width = `${this.w + this.dx}px`;
    },
    touchEndHandler() {
      this.isGrabbing = false;
      document.removeEventListener("touchmove", this.touchMoveHandler);
      document.removeEventListener("touchend", this.touchEndHandler);
    },
    mouseUpHandler() {
      this.isGrabbing = false;
      document.removeEventListener("mousemove", this.mouseMoveHandler);
      document.removeEventListener("mouseup", this.mouseUpHandler);
    },
    getPercentageBanner() {
      const resizeContainer = document.getElementById("resizeMe");
      const resize = document.querySelector(".resize");

      //calculate percentage of parent div of resize
      const styles = window.getComputedStyle(resizeContainer);
      const containerWidth = window.getComputedStyle(resize);

      this.percentageWidth =
        (parseInt(styles.width, 10) / parseInt(containerWidth.width, 10)) * 100;
    },
  },
};
</script>
