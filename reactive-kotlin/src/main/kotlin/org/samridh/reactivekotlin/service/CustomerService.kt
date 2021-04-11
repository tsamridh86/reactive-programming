package org.samridh.reactivekotlin.service

import org.springframework.beans.factory.annotation.Autowired
import org.samridh.reactivekotlin.dao.CustomerDAO
import org.samridh.reactivekotlin.model.Customer
import org.springframework.stereotype.Service

@Service
class CustomerService {
    @Autowired
    lateinit var customerDAO: CustomerDAO
    fun getAllCustomers() = customerDAO.getAllCustomers()
    fun getAllCustomerStream() = customerDAO.getAllCustomersStream()
}