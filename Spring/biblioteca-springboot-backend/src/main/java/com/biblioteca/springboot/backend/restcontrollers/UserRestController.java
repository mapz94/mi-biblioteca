package com.biblioteca.springboot.backend.restcontrollers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.biblioteca.springboot.backend.models.entity.User;
import com.biblioteca.springboot.backend.models.services.IUserService;

@CrossOrigin(origins = {"http://localhost:4200"})
@RestController
@RequestMapping("/biblio")
public class UserRestController {
	
	@Autowired
	private IUserService userService;
	
	@GetMapping("/users")
	public List<User> index() {
		return userService.findAll();
	}
	
	@GetMapping("/users/{id}")
	public ResponseEntity<?> show(@PathVariable Long id) {
		User userSearch = null;
		Map<String, Object> response = new HashMap<>();
		try { 
			userSearch = userService.findById(id);
		} catch(DataAccessException e) {
			response.put("mensaje", "Error al realizar la busqueda en la base de datos.");
			response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		if ( userSearch == null ) {
			response.put("mensaje", "El usuario ID '".concat(id.toString()).concat("' no existe en la base de datos."));
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return new ResponseEntity<User>(userSearch, HttpStatus.OK);
	}
	
	@PostMapping("/users")
	public ResponseEntity<?> create(@RequestBody User user) {
		User userCreated = null;
		Map<String, Object> response = new HashMap<>();
		try {
			userCreated = userService.save(user);
		} catch(DataAccessException e) {
			response.put("mensaje", "Error al realizar el insert en la base de datos.");
			response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		response.put("mensaje", "El cliente ha sido creado con éxito!.");
		response.put("usuario", userCreated);
		return new ResponseEntity<Map<String, Object>>(response, HttpStatus.CREATED);
	}
	
	@PutMapping("/users/{id}")
	public ResponseEntity<?> update(@RequestBody User user, @PathVariable Long id) {
		User userActual = userService.findById(id);
		User userUpdated = null;
		Map<String, Object> response = new HashMap<>();
		if ( userActual == null ) {
			response.put("mensaje", "El usuario ID '".concat(id.toString()).concat("' no existe en la base de datos."));
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		try {			
			userActual.setNombre(user.getNombre());
			userActual.setApellidoPaterno(user.getApellidoPaterno());
			userActual.setApellidoMaterno(user.getApellidoMaterno());
			userActual.setEmail(user.getEmail());
			userActual.setPassword(user.getPassword());
			userUpdated = userService.save(userActual);
		} catch(DataAccessException e) {
			response.put("mensaje", "Error al actualizar el usuario en la base de datos.");
			response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		response.put("mensaje", "El usuario ha sido actualizado con éxito!.");
		response.put("usuario", userUpdated);
		return new ResponseEntity<Map<String, Object>>(response, HttpStatus.CREATED);
		
	}
	
	@DeleteMapping("/users/{id}")
	public ResponseEntity<?> delete(@PathVariable Long id) {
		Map<String, Object> response = new HashMap<>();
		try {
			userService.delete(id);
		} catch(DataAccessException e) {
			response.put("mensaje", "Error al eliminar el cliente en la base de datos.");
			response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		} 
		response.put("mensaje", "El cliente ha sido eliminado con éxito!.");
		return new ResponseEntity<Map<String, Object>>(response, HttpStatus.OK);
	}
}
