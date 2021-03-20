# Deep Learning with Javascript

Introductory chaper.

### Why ML to Javascript ?

"""
First, once a machine-learning model is trained, it must be deployed somewhere in
order to make predictions on real data (such as classifying images and text, detecting
events in audio or video streams, and so on). Without deployment, training a model is
just a waste of compute power. It is often desirable or imperative that the “somewhere”
is a web frontend. Readers of this book are likely to appreciate the overall importance
of the web browser.
"""

page 36

### Use of Representation:

1. Representation can be used to ensure that the coordinates areappropriately mapped onto the graph

2. for example using polar coordinates instead of cartesian coordinates

### Neural Network and deep learning

Neural network simply put is a function that gives you a result But it has a memory of its own. This memory comes from its weights. It is composed of layers stacked on top of each other.

When the number of layers ranges from a dozen to few hundereds we call it a deep newural network and what it does is essentially deep learning.

### Other techniques we kind of disregarded

1.Naive Bayes Classifier - One of the earliest forms of machine learning. It is the probability of an event occuring given the probability of inidivual events happening. It is based on the assumption that events are independent.

2. Logistic Regression -  Classification technique. Thanks to its simple and versatile nature. It is basically extrapolating a line

3. Kernel methods -  SVMs are best known example that use transformation to maximize a distance (margin) between classes of examples

4. Decision Trees -  Flowchart-like structures that let you classify input data points or predict output values given inputs

5. Random forests - These increase the prediction accuracy of decision trees by forming an ensemble of largenumber of specialized individual decision trees,

### Things that helped deep learning come back up

Algorithmic advances : 

better activation function, better weight initialisation, better optimization schemes

### Advantages of javascript

1. reduced server cost
2. lowered inference latency
3. data privay
4. instant webgl acc
5. instant access

ambient light - http://mobilehtml5.org

### GPU vs CPU

CPU - single instruciton single data
GPU - Single instruction multiple data

### Tensorflow playground link

https://playground.tensorflow.org/

### Nodejs as a server

1. performance and skill set
2. it is javascript out of browser
3. tensorflowjs works both in browser and nodejs

### tensorflow js

Keras used for simplfying tensorflow code
tesnorflow - tensor and graphs(flow)
deeplearn.js -> tensorflow.js
other stuff - brain.js, ml5.js

# use of tensolow js

1. Google’s Project Magenta uses TensorFlow.js to run RNNs and other kinds of
deep neural networks to generate musical scores and novel instrument sounds
in the browser (https://magenta.tensorflow.org/demos/).

2.  Dan Shiffman and his colleagues at New York University built ML5.js, an easy-touse, higher-level API for various out-of-the-box deep-learning models for the
browser, such as object detection and image style transfer (https://ml5js.org)

3.  See TensorFlow.js’s gallery of other outstanding applications built by the
open source community at https://github.com/tensorflow/tfjs/blob/master/
GALLERY.md.

## Exercise

1. Think of applications-

1. myntra fasion sunglasses
2. mobile sports exercise
3. device is used by a child or not
4. rnn to dtect typo in code
5. cargo logistics service

6. using a browser extension to know whether the website is being brute forced
7. posture alerter
8. translator
9. intelligent history inductor
10. mlaicious site or not indicator

