# declarative-form-generator
A simple react form generator using functional programming concepts.
An explanation of how it works is being drafted!

## How does it work?
The core idea behind the form generator is to use a schema to render form in the UI. 

The form schema is a JSON structure, an array of objects, each representing an input fi##eld on the form. 

The ```generator``` takes this JSON structure as an input and returns a list of React Components, each corresponding to the object in the JSON structure at that position.

## The Concept
The ```generator``` has been built using a simple concept from Category Theory in order to render the form from an array of input fields. 

Below is an example of schema.json:

```
[
  {
    "type": "string",
    "label": "First Name",
    "required": true,
    "placeholder": "first name",
    "readOnly": false,
    "name": "fname"
  },
  {
    "type": "list",
    "lookupId": "id",
    "lookupDisplay": "name",
    "lookupUrl": "http://localhost:8080/cities",
    "defaultValue": 2,
    "readOnly": false,
    "required": true,
    "label": "City",
    "name": "city",
    "placeholder": "city"
  },
  {
    "type": "string",
    "label": "Last Name",
    "required": true,
    "placeholder": "last name",
    "defaultValue": "x",
    "readOnly": false,
    "name": "lname"
  }
]
```

The responsibility of the ```generator``` is to transform the above JSON schema into an array of ```React``` components like so:

```
[
  <div>
    <label>First Name</label>
    <input
      type='text'
      required=true
      placeholder='first name'
      readOnly=false
      name='fname'
      onChange=<onChange Handler inserted by the generator>
      />
  </div>,
  ...
]
```
The process of this transformation has been developed using ```composition```, ```currying``` and ```Maybe Monad```

## A bit of Category Theory

This section explains the above transformation process using diagrams. 

![alt text](/generator1.PNG)

## To-do

* add tests using Jest
* update documentation
