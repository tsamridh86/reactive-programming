package org.samridh.reactivekotlin.dao

import org.samridh.reactivekotlin.model.Customer
import java.util.stream.IntStream
import java.util.function.IntConsumer
import org.samridh.reactivekotlin.dao.CustomerDAO
import org.springframework.stereotype.Component
import reactor.core.publisher.Flux
import java.util.function.IntFunction
import java.util.stream.Collectors
import java.lang.InterruptedException
import java.time.Duration

@Component
class CustomerDAO {
    fun getAllCustomers() : List<Customer>
         = IntStream.rangeClosed(1, 10)
            .peek { sleepSeconds(it) }
            .peek { println("processing count $it") }
            .mapToObj { Customer("$it", "Customer$it") }
            .collect(Collectors.toList())

    /**
     * Writing documentation for this so that it shows up on the
     * intellisense
     *
     * @throws InterruptedException should not happen, but I have placed delay here
     */
    fun getAllCustomersStream(): Flux<Customer>
     = Flux.range(1,10)
        .delayElements(Duration.ofSeconds(1))
        .doOnNext{ println("processing count $it") }
        .map { Customer("$it", "Customer$it")}

        fun sleepSeconds(i: Int) {
            try {
                Thread.sleep(1000)
            } catch (e: InterruptedException) {
                e.printStackTrace()
            }
        }

}