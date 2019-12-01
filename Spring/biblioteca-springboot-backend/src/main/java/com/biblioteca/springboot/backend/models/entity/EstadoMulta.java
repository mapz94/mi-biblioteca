package com.biblioteca.springboot.backend.models.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/* Clase Usuario, debe coincidir los atributos en el backend y frontend. 
 * Especificar si es una entidad y la tabla a la cual va asociada en minusculas y plural.*/
@Entity
@Table(name="estados_multa")
public class EstadoMulta implements Serializable {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;

	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getEstado() {
		return estado;
	}


	public void setEstado(String estado) {
		this.estado = estado;
	}


	@Column(nullable=false, name="estado_multa")
	private String estado;

	
	private static final long serialVersionUID = 1L;
}