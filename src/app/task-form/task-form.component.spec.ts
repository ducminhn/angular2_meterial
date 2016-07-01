/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { TaskFormComponent } from './task-form.component';

describe('Component: TaskForm', () => {
  it('should create an instance', () => {
    let component = new TaskFormComponent();
    expect(component).toBeTruthy();
  });
});
