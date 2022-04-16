//setup scene and camera and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(70, window.innerWidth/window.innerHeight,0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize(window.innerWidth, window.innerHeight);
//render into document
document.body.appendChild(renderer.domElement);

//create sprite
const bear_map_a = new THREE.TextureLoader().load('sprites/bear.png');
const bear_map_b = new THREE.TextureLoader().load('sprites/bear2.png');

const spr_material_a = new THREE.SpriteMaterial({map: bear_map_a, color: 0xffffff, fog: true});
const spr_material_b = new THREE.SpriteMaterial({map: bear_map_b, color: 0xffffff, fog: true});

camera.position.z = 5;
console.log("loaded")
scene.fog = new THREE.Fog(0x000000, 4, 5)

const amt = 100;
const sprites = []

window.addEventListener( 'resize', onWindowResize );

spawn();
animate()


function spawn(){
    for(i = 0; i < amt; i++){
        var material = (i%2==0)? spr_material_a : spr_material_b;
        sprites[i] = new THREE.Sprite(material);
        rand_c(sprites[i]);
        scene.add(sprites[i]);
    }
}

function animate(){
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    for(i = 0; i < amt; i++){
        sprite = sprites[i];
        sprite.position.z -= 0.01;
        if(sprite.position.z < -5){
            rand_c(sprite);
        }
    }
}

function rand_c(r_c){
    r_c.position.x = (Math.random()-0.5)*8;
    r_c.position.y = (Math.random()-0.5)*8;
    r_c.position.z = (Math.random()*15)+5;
}

function onWindowResize() {

    const width = window.innerWidth;
    const height = window.innerHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}