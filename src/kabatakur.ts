import express from "express";

function add(num1: number, num2: number) {
    return num1 + num2;
  }
  
  function subtract(num1: number, num2: number) {
    return num1 - num2;
  }
  
  function multiply(num1: number, num2: number) {
    return num1 * num2;
  }
  
  function divide(num1: number, num2: number) {
    if (num2 === 0) {
      throw new Error('Division by zero');
    }
    return num1 / num2;
  }
  
  module.exports = {
    add,
    subtract,
    multiply,
    divide
  };