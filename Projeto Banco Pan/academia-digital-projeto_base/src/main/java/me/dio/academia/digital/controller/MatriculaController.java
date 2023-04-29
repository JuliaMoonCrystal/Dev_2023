package me.dio.academia.digital.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import me.dio.academia.digital.entity.Aluno;
import me.dio.academia.digital.entity.Matricula;
import me.dio.academia.digital.repository.AlunoRepository;
import me.dio.academia.digital.repository.MatriculaRepository;

@RestController
@RequestMapping("/matriculas")
public class MatriculaController {
	
	@Autowired
	private MatriculaRepository repository;
    
	
	@GetMapping
	public ResponseEntity<List<Matricula>> GetAll(){
		return ResponseEntity.ok(repository.findAll());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Matricula> GetById(@PathVariable long id){
		 return repository.findById(id)
		           .map(resp -> ResponseEntity.ok().body(resp))
		           .orElse(ResponseEntity.notFound().build());	
	}
	
	@PostMapping  
	public ResponseEntity<Matricula> postALuno (@RequestBody Matricula matricula){
		return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(matricula));
	}
}
