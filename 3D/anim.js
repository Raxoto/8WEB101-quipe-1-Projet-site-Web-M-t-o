const MODEL_URL = './models/sphere.glb';
// 1) Log clair au chargement
loader.load(
  MODEL_URL,
  (gltf) => {
    console.log('GLB chargé ✅', MODEL_URL);
    const root = gltf.scene || gltf.scenes[0];
    normalizeAndCenter(root); // <-- garde bien cette fonction
    target.add(root);
  },
  undefined,
  (err) => {
    console.error('Échec chargement GLB ❌', err);   // <--- si ça passe ici, le fallback sphère s'affiche
    clearTarget();
    target.add(makeFallbackSphere());
  }
);
// 2) (Optionnel) Aides visuelles pour déboguer la scène
scene.add(new THREE.AxesHelper(1.5));      // montre l'origine
// et, juste après avoir ajouté le modèle :
const box = new THREE.Box3().setFromObject(root);
console.log('Bounding box du modèle :', box.min, box.max);
