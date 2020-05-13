package com.capgemini.drinksanddelight.dao;

import com.capgemini.drinksanddelight.entities.ProductOrderEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


/*
@author MANASI GAUTAM
*/

@Repository
public interface ProductOrderDao extends JpaRepository<ProductOrderEntity,String> {

	
}

