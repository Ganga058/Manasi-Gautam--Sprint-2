package com.capgemini.drinksanddelight.exception;

/*
@author MANASI GAUTAM
*/

	@SuppressWarnings("serial")
	public class OrderIdNotFoundException extends Exception{

		public OrderIdNotFoundException() {
			super();
		}
		
		public OrderIdNotFoundException(String msg) {
			super(msg);
		}
	}


