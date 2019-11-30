package com.biblioteca.springboot.backend.restcontrollers;

import java.io.IOException;
import java.net.MalformedURLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpHeaders;
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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.biblioteca.springboot.backend.models.entity.Socio;
import com.biblioteca.springboot.backend.models.services.IUploadFileService;
import com.biblioteca.springboot.backend.models.services.ISocioService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
// @CrossOrigin(origins = {"http://localhost:4200"})
@RestController
@RequestMapping("/biblio")
public class SocioRestController {
	
	@Autowired
	private ISocioService socioService;
	
	@Autowired
	private IUploadFileService uploadService;
	
	@GetMapping("/socios")
	public List<Socio> index() {
		return socioService.findAll();
	}
	
	@GetMapping("/socios/{id}")
	public ResponseEntity<?> show(@PathVariable Long id) {
		Socio socioSearch = null;
		Map<String, Object> response = new HashMap<>();
		try { 
			socioSearch = socioService.findById(id);
		} catch(DataAccessException e) {
			response.put("mensaje", "Error al realizar la busqueda en la base de datos.");
			response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		if ( socioSearch == null ) {
			response.put("mensaje", "El usuario ID '".concat(id.toString()).concat("' no existe en la base de datos."));
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return new ResponseEntity<Socio>(socioSearch, HttpStatus.OK);
	}
	
	@PostMapping("/socios")
	public ResponseEntity<?> create(@RequestBody Socio socio) {
		Socio socioCreated = null;
		Map<String, Object> response = new HashMap<>();
		try {
			socioCreated = socioService.save(socio);
		} catch(DataAccessException e) {
			response.put("mensaje", "Error al realizar el insert en la base de datos.");
			response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		response.put("mensaje", "El cliente ha sido creado con éxito!.");
		response.put("socio", socioCreated);
		return new ResponseEntity<Map<String, Object>>(response, HttpStatus.CREATED);
	}
	
	@PutMapping("/socios/{id}")
	public ResponseEntity<?> update(@RequestBody Socio socio, @PathVariable Long id) {
		Socio socioActual = socioService.findById(id);
		Socio socioUpdated = null;
		Map<String, Object> response = new HashMap<>();
		if ( socioActual == null ) {
			response.put("mensaje", "El socio ID '".concat(id.toString()).concat("' no existe en la base de datos."));
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		try {
			socioActual.setPassword(socio.getPassword());			
			socioActual.setEmail(socio.getEmail());
			socioActual.setBiblioteca(socio.getBiblioteca());
			socioActual.setPersona(socio.getPersona());
			socioUpdated = socioService.save(socioActual);
		} catch(DataAccessException e) {
			response.put("mensaje", "Error al actualizar el usuario en la base de datos.");
			response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		response.put("mensaje", "El usuario ha sido actualizado con éxito!.");
		response.put("usuario", socioUpdated);
		return new ResponseEntity<Map<String, Object>>(response, HttpStatus.CREATED);
		
	}
	
	@DeleteMapping("/socios/{id}")
	public ResponseEntity<?> delete(@PathVariable Long id) {
		Map<String, Object> response = new HashMap<>();
		try {
			socioService.delete(id);
		} catch(DataAccessException e) {
			response.put("mensaje", "Error al eliminar el cliente en la base de datos.");
			response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		} 
		response.put("mensaje", "El cliente ha sido eliminado con éxito!.");
		return new ResponseEntity<Map<String, Object>>(response, HttpStatus.OK);
	}
	
	@PostMapping("/socios/upload")
	public ResponseEntity<?> upload(@RequestParam("archivo") MultipartFile archivo, @RequestParam("id") Long id ) {
		Map<String, Object> response = new HashMap<>();
		
		Socio socio = socioService.findById(id);
		
		if (!archivo.isEmpty()) {
			String nombreArchivo = null;
			
			try {
				nombreArchivo = uploadService.copiar(archivo);
			} catch (IOException e) {
				response.put("mensaje", "Error al eliminar al subir la imagen del cliente");
				response.put("error", e.getMessage().concat(": ").concat(e.getCause().getMessage()));
				return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
			}
			
			String avatarAnterior = socio.getImgAvatar();
			uploadService.eliminar(avatarAnterior);
			socio.setImgAvatar(nombreArchivo);
			socioService.save(socio);
			
			response.put("socio", socio);
			response.put("mensaje", "Has subido correctamente la imagen: " + nombreArchivo);
			
		}
		
		return new ResponseEntity<Map<String, Object>>(response, HttpStatus.CREATED);
	}
	
	@GetMapping("/uploads/img/{nombreAvatar:.+}")
	public ResponseEntity<Resource> verAvatar(@PathVariable String nombreAvatar) {
		Resource recurso = null;
		
		try {
			recurso = uploadService.cargar(nombreAvatar);
		} catch (MalformedURLException e) {
			e.printStackTrace();
		}
		
		HttpHeaders cabecera = new HttpHeaders();
		cabecera.add(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + recurso.getFilename() + "\"");
		
		return new ResponseEntity<Resource>(recurso, cabecera, HttpStatus.OK);
	}
}
