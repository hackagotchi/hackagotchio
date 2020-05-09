---
title: 'A brief introduction to the Keras API'
excerpt: "It's hard to get started with ML, that's for sure. The APIs are all filled with abstract keywords, with very little to go off of. However, with time, you can get accustomed to them, and truly understand how powerfuly the TF ecosystem is."
coverImage: '/assets/blog/keras-intro/cover.jpg'
date: '2020-05-04T05:35:07.322Z'
author:
  name: Rishi Kothari
  picture: '/assets/blog/authors/rishi.jpeg'
ogImage:
  url: '/assets/blog/keras-intro/cover.jpg'
categories:
  - 'ML'
  - 'programming'
  - 'tutorial'
emoji: '🔆'
---

## Table of Contents
[toc]

<p>Notes</p>
<small>This article assumes you're already familiar with the definition of machine learning, like neurons, the gradient descent and backpropagation algorithms, and how all of them link together. If you're not familiar with how these work, I highly recommend [Grant Sanderson](https://3blue1brown.co)'s course on the math and intuition behind Neural Nets: [View Here](</small>

<hr/>

## Introduction
Keras and TensorFlow are some of the most recognizable names in the machine learning ecosystem. The former is a high level, idiomatic deep learning API, and the latter is primarily a graph computational library. However, computation is but one part of Tensorflow's entire library. It's used as a complete machine learning library in the real world, and exposes a subset of Keras to do so.

Think to yourself: how much of that made sense? If your answer was something along the lines of, "not much," don't worry! That's what this article is about.

## The structure of a neuron

Before getting into he programmatic aspects of ML, let's take a look at how a neuron functions, and what its purpose is.

A neuron can be thought of as a function:

```latex
n(x) = w \cdot x + b
```
where ~w~ is a tensor with all the weights of the equation, ~x~ is a tensor with all the inputs to the equation, and ~b~ is the bias.

### What all those terms mean

This is where a lot of people get stuck; these seemingly arbitrary definitions of tensors, weights, biases and 

## Deconstructing a neural network

A neural network is made up of at least two _layers_, which each have at least one neuron. In order to connect these layers up, each neuron has _parameters_, which are simply the outputs of the previous layer.

A layer that has all of its neurons connected up is known as a _dense_ layer (this terminology will come up again, so take note!).

![A representation of a Neural Network.](/assets/blog/keras-intro/neural_net.png)
<p class="text-sm text-center"><em>Figure 1</em>: A common representation of a Neural Network.</p>

## The Keras API

## Tying it all together

## Conclusion

