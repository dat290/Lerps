﻿function Start () {

}

function Update () {
  if(Input.anyKeyDown)
    MoveOver();
}

function MoveOver() {
  var t : float = 0;
  var startPoint = Vector3(-5, 0, 0);
  var endPoint = Vector3(5, 0, 0);
  
  
  while(t < 1) {
    // startPoint * (1-t) + endPoint * t
    transform.position = startPoint * (1 - Mathf.Pow(t, 2)) + endPoint * Mathf.Pow(t, 2);
    // transform.position = startPoint * (1 - t) + endPoint * t;
    t += 0.5 * Time.deltaTime;
    yield;
  }
}