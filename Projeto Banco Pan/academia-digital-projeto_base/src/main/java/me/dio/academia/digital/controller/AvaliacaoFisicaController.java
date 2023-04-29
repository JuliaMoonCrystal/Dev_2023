package me.dio.academia.digital.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import me.dio.academia.digital.entity.AvaliacaoFisica;
import me.dio.academia.digital.repository.AvaliacaoFisicaRepository;

@RestController
@RequestMapping("/avaliacoes")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class AvaliacaoFisicaController {
	
	@Autowired
	private AvaliacaoFisicaRepository repository;
    
	@GetMapping
	public ResponseEntity<List<AvaliacaoFisica>> GetAll(){
		return ResponseEntity.ok(repository.findAll());
		
	}
	
	@PostMapping 
	public ResponseEntity<AvaliacaoFisica> postPostagem (@RequestBody AvaliacaoFisica avaliacao){
		return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(avaliacao));
	}
	
	@PutMapping
	public ResponseEntity<AvaliacaoFisica> putPostagem (@RequestBody AvaliacaoFisica avaliacao){
		return ResponseEntity.status(HttpStatus.OK).body(repository.save(avaliacao));
	}

}
