<template>
  <div>
    <div class="purple-height overlay grey">
      <div class="container">
        <div class="div-text">
          <div class="row text-center">
            <div class="col-md-6">
              <h2>Take Your First Step</h2>
            </div>
            <div class="col-md-6">
              <button>Schedule your First Call</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.purple-height {
  height: 30vh;
  background: #6c2482;
  padding: 50px;
}

.row {
  display: flex;
  align-items: center;
  justify-content: center;
}

.text-center {
  text-align: center;
}

.div-text {
  position: relative;
  max-width: 100%;
  z-index: 100;

  h2 {
    color: #fff;
    font-size: 1.9rem;
    border: 0;
  }
  p {
    color: #fff;
    font-size: 1.5rem;
  }
  a {
    color: #fff;
  }
}
.overlay {
  position: relative;
  z-index: 5;
}

.overlay:after {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}

.overlay:after {
  opacity: 0.9;
}

.grey:after {
  background-color: #00000066;
}
</style>
<script>
export default {
  name: "FullHeightDiv"
};
</script>
