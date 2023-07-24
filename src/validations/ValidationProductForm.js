import { yupResolver } from '@hookform/resolvers/yup';
import *as youp from 'yup';

export const  ProductSchema = youp.object().shape({
  
    //---------------------------name category Validations---------------------//
  name:youp.
  string().
  required("the field is required"),

    //---------------------------description category Validations---------------------//
  description:youp.
  string().
  required().
  min(10,"min long of the text is 10 characters")
  .max(80, 'max long of the text is 80 characters'),

    //---------------------------stoock product Validations---------------------//
  stoock:youp.
  string().
  min(2,"min long of the text is 2 characters").
  max(10,"max long of the text is 80 characters").
  required("the field is required"),

      //---------------------------price product product Validations---------------------//
  price:youp.
  string("the type of value should be number").
  required("the field is required"),
  
      //---------------------------quantity product product Validations---------------------//

  quantity:youp.
  string("the type of value should be number").
  required("the field is required"),
  
      //---------------------------category product product Validations---------------------//
  category:youp.
  string().
  required("the field is required")
  
});