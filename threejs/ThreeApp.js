import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as shader from "./Shaders/Shader";
//import * as dat from 'dat.gui'
import gsap from 'gsap'

export default class Sketch {
  constructor(selector) {
    console.log(selector);
    this.scene = new THREE.Scene();
    this.container = selector;
    this.width = this.container.offsetWidth;
    this.height = this.container.offsetHeight;
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.width, this.height);
    //this.renderer.setClearColor(0xeeeeee, 1);
    this.renderer.outputEncoding = THREE.sRGBEncoding;



    this.container.appendChild(this.renderer.domElement);

    this.camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.001,
      1000
    );

    // var frustumSize = 10;
    // var aspect = window.innerWidth / window.innerHeight;
    // this.camera = new THREE.OrthographicCamera( frustumSize * aspect / - 2, frustumSize * aspect / 2, frustumSize / 2, frustumSize / - 2, -1000, 1000 );
   // this.camera.position.set(0, 0, 2);
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.camera.position.z = -100

    this.time = 0;

    this.isPlaying = true;

  //  this.addObjects();
    this.resize();
    this.render();
    this.setupResize();
    //this.settings();


    this.world = {
        plane: {
          width: 400,
          height: 400,
          widthSegments: 50,
          heightSegments: 50
        }
      }

      this.mouse = {
        x: undefined,
        y: undefined
      }

      addEventListener('mousemove', (event) => {
        this.mouse.x = (event.clientX / innerWidth) * 2 - 1
        this.mouse.y = -(event.clientY / innerHeight) * 2 + 1

      })

  






 this.raycaster = new THREE.Raycaster()
//  scene = new THREE.Scene()
 this.camera = new THREE.PerspectiveCamera(
  75,
  innerWidth / innerHeight,
  0.1,
  1000
)
//const renderer = new THREE.WebGLRenderer()

// renderer.setSize(innerWidth, innerHeight)
// renderer.setPixelRatio(devicePixelRatio)
// document.body.appendChild(renderer.domElement)

new OrbitControls(this.camera, this.renderer.domElement)
this.camera.position.z = 500

const planeGeometry = new THREE.PlaneGeometry(
  this.world.plane.width,
  this.world.plane.height,
  this.world.plane.widthSegments,
  this.world.plane.heightSegments
)
const planeMaterial = new THREE.MeshPhongMaterial({
  side: THREE.DoubleSide,
  flatShading: THREE.FlatShading,
  vertexColors: true
})
this.planeMesh = new THREE.Mesh(planeGeometry, planeMaterial)

this.scene.add(this.planeMesh)

this.generatePlane()

    const light = new THREE.DirectionalLight(0xffffff, 1)
    light.position.set(0, -1, 1)
    this.scene.add(light)

    const backLight = new THREE.DirectionalLight(0xffffff, 1)
    backLight.position.set(0, 0, -1)
    this.scene.add(backLight)

    const starGeometry = new THREE.BufferGeometry()
    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff
    })

    const starVerticies = []
    for (let i = 0; i < 10000; i++) {
      const x = (Math.random() - 0.5) * 2000
      const y = (Math.random() - 0.5) * 2000
      const z = (Math.random() - 0.5) * 2000
      starVerticies.push(x, y, z)
    }

    starGeometry.setAttribute(
        'position',
        new THREE.Float32BufferAttribute(starVerticies, 3)
      )


      this.stars = new THREE.Points(starGeometry, starMaterial)
      this.scene.add(this.stars)

      this.frame = 0;
      this.animate();
  }




// let frame = 0
 animate() {
  requestAnimationFrame(this.animate.bind(this))
  this.renderer.render(this.scene, this.camera)
  this.raycaster.setFromCamera(this.mouse, this.camera)
  this. frame += 0.01


  const {
    array,
    originalPosition,
    randomValues
  } = this.planeMesh.geometry.attributes.position
  for (let i = 0; i < array.length; i += 3) {
    // x
    array[i] = originalPosition[i] + Math.cos(this.frame + randomValues[i]) * 0.01

    // y
    array[i + 1] =
      originalPosition[i + 1] + Math.sin(this.frame + randomValues[i + 1]) * 0.001
  }

  this.planeMesh.geometry.attributes.position.needsUpdate = true

  const intersects = this.raycaster.intersectObject(this.planeMesh)
  if (intersects.length > 0) {
    const { color } = intersects[0].object.geometry.attributes

    // vertice 1
    color.setX(intersects[0].face.a, 0.1)
    color.setY(intersects[0].face.a, 0.5)
    color.setZ(intersects[0].face.a, 1)

    // vertice 2
    color.setX(intersects[0].face.b, 0.1)
    color.setY(intersects[0].face.b, 0.5)
    color.setZ(intersects[0].face.b, 1)

    // vertice 3
    color.setX(intersects[0].face.c, 0.1)
    color.setY(intersects[0].face.c, 0.5)
    color.setZ(intersects[0].face.c, 1)

    intersects[0].object.geometry.attributes.color.needsUpdate = true

    const initialColor = {
      r: 0,
      g: 0.19,
      b: 0.4
    }

    const hoverColor = {
      r: 0.1,
      g: 0.5,
      b: 1
    }

    gsap.to(hoverColor, {
      r: initialColor.r,
      g: initialColor.g,
      b: initialColor.b,
      duration: 1,
      onUpdate: () => {
        // vertice 1
        color.setX(intersects[0].face.a, hoverColor.r)
        color.setY(intersects[0].face.a, hoverColor.g)
        color.setZ(intersects[0].face.a, hoverColor.b)

        // vertice 2
        color.setX(intersects[0].face.b, hoverColor.r)
        color.setY(intersects[0].face.b, hoverColor.g)
        color.setZ(intersects[0].face.b, hoverColor.b)

        // vertice 3
        color.setX(intersects[0].face.c, hoverColor.r)
        color.setY(intersects[0].face.c, hoverColor.g)
        color.setZ(intersects[0].face.c, hoverColor.b)
        color.needsUpdate = true
      }
    })
  }

  this.stars.rotation.x += 0.0005
}





generatePlane()
  {

 // this.planeMesh = new THREE.Mesh(planeGeometry, planeMaterial)
  // if(this.planeMesh === undefined)
  // return;

  this.planeMesh.geometry.dispose()
  this.planeMesh.geometry = new THREE.PlaneGeometry(
    this.world.plane.width,
    this.world.plane.height,
    this.world.plane.widthSegments,
    this.world.plane.heightSegments
  )

  // vertice position randomization
  const { array } = this.planeMesh.geometry.attributes.position
  const randomValues = []
  for (let i = 0; i < array.length; i++) {
    if (i % 3 === 0) {
      const x = array[i]
      const y = array[i + 1]
      const z = array[i + 2]

      array[i] = x + (Math.random() - 0.5) * 3
      array[i + 1] = y + (Math.random() - 0.5) * 3
      array[i + 2] = z + (Math.random() - 0.5) * 3
    }

    randomValues.push(Math.random() * Math.PI * 2)
  }

  this.planeMesh.geometry.attributes.position.randomValues = randomValues
  this.planeMesh.geometry.attributes.position.originalPosition =
  this.planeMesh.geometry.attributes.position.array

  const colors = []
  for (let i = 0; i < this.planeMesh.geometry.attributes.position.count; i++) {
    colors.push(0, 0.19, 0.4)
  }

  this.planeMesh.geometry.setAttribute(
    'color',
    new THREE.BufferAttribute(new Float32Array(colors), 3)
  )
}

// animate()

// addEventListener('mousemove', (event) => {
//   mouse.x = (event.clientX / innerWidth) * 2 - 1
//   mouse.y = -(event.clientY / innerHeight) * 2 + 1
// })

// gsap.to('#christopherLis', {
//   opacity: 1,
//   duration: 1.5,
//   y: 0,
//   ease: 'expo'
// })

// gsap.to('#oneWithAn', {
//   opacity: 1,
//   duration: 1.5,
//   delay: 0.3,
//   y: 0,
//   ease: 'expo'
// })

// gsap.to('#viewWorkBtn', {
//   opacity: 1,
//   duration: 1.5,
//   delay: 0.6,
//   y: 0,
//   ease: 'expo'
// })

// document.querySelector('#viewWorkBtn')?.addEventListener('click', (e) => {
//   e.preventDefault()
//   gsap.to('#container', {
//     opacity: 0
//   })

//   gsap.to(camera.position, {
//     z: 25,
//     ease: 'power3.inOut',
//     duration: 2
//   })
//   gsap.to(camera.rotation, {
//     x: 1.57,
//     ease: 'power3.inOut',
//     duration: 2
//   })

//   gsap.to(camera.position, {
//     y: 1000,
//     ease: 'power3.in',
//     duration: 1,
//     delay: 2,
//     onComplete: () => {
//       globa.location = 'https://chriscourses.com/'
//     }
//   })
// })

// addEventListener('resize', () => {
//   camera.aspect = innerWidth / innerHeight
//   camera.updateProjectionMatrix()

//   renderer.setSize(innerWidth, innerHeight)
// })




































  settings() {
    let that = this;
    this.settings = {
      progress: 0,
    };
    this.gui = new dat.GUI();
    this.gui.add(this.settings, "progress", 0, 1, 0.01);
  }

  setupResize() {
    window.addEventListener("resize", this.resize.bind(this));
  }

  resize() {
    this.width = this.container.offsetWidth;
    this.height = this.container.offsetHeight;
    this.renderer.setSize(this.width, this.height);
    this.camera.aspect = this.width / this.height;
    this.camera.updateProjectionMatrix();
  }

  addObjects() {
    let that = this;
    this.material = new THREE.ShaderMaterial({
      extensions: {
        derivatives: "#extension GL_OES_standard_derivatives : enable",
      },
      side: THREE.DoubleSide,
      uniforms: {
        time: { type: "f", value: 0 },
        resolution: { type: "v4", value: new THREE.Vector4() },
        uvRate1: {
          value: new THREE.Vector2(1, 1),
        },
      },
      // wireframe: true,
      // transparent: true,
      vertexShader: shader.vertex,
      fragmentShader: shader.fragment,
    });

    this.geometry = new THREE.PlaneGeometry(1, 1, 1, 1);

    this.plane = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.plane);
  }

  stop() {
    this.isPlaying = false;
  }

  play() {
    if (!this.isPlaying) {
      this.render();
      this.isPlaying = true;
    }
  }

  render() {
    // if (!this.isPlaying) return;
    // this.time += 0.05;
    // this.material.uniforms.time.value = this.time;
    requestAnimationFrame(this.render.bind(this));
    this.renderer.render(this.scene, this.camera);
  }
}
