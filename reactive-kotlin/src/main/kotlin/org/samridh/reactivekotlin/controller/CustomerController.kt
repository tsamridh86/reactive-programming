package org.samridh.reactivekotlin.controller

import org.springframework.web.bind.annotation.RestController
import org.springframework.beans.factory.annotation.Autowired
import org.samridh.reactivekotlin.service.CustomerService
import org.springframework.web.bind.annotation.GetMapping
import org.samridh.reactivekotlin.model.Customer
import org.springframework.http.MediaType
import org.springframework.web.bind.annotation.CrossOrigin



@RestController
class CustomerController {
    @Autowired
    lateinit var customerService: CustomerService

    @CrossOrigin(origins = ["*", "http://localhost:3000"])
    @GetMapping("/customers")
    fun getCustomers() = customerService.getAllCustomers()


    @CrossOrigin(origins = ["*", "http://localhost:3000"])
    @GetMapping("/customers/stream", produces = [MediaType.APPLICATION_NDJSON_VALUE])
    fun getCustomerStream() = customerService.getAllCustomerStream()

    @GetMapping("/")
    fun sayHello() = "hello"

}