package com.commutegrab.web;

import com.commutegrab.model.TestThing;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

@Transactional
@RestController
@RequestMapping("/hello")
public class HelloEndpoint {

	@PersistenceContext
	private EntityManager em;

	@RequestMapping(method = GET)
	public ResponseEntity<String> greet(@RequestParam final String message) {
		final TestThing thing = new TestThing();
		thing.setValue(message);
		em.persist(thing);

		return new ResponseEntity<>("Hello. " + message, HttpStatus.OK);
	}

	@RequestMapping("/load")
	public ResponseEntity<List<TestThing>> load() {
		final TypedQuery<TestThing> query = em.createQuery("select t from TestThing t", TestThing.class);
		return new ResponseEntity<>(query.getResultList(), HttpStatus.OK);
	}

}
