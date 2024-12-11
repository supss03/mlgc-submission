const tf = require('@tensorflow/tfjs-node');
async function loadModel() {
    return tf.loadGraphModel('https://storage.googleapis.com/prediction-ml-model/model.json');
}
module.exports = loadModel;