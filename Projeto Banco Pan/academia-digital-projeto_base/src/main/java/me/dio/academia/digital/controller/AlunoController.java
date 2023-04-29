package me.dio.academia.digital.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import me.dio.academia.digital.entity.Aluno;
import me.dio.academia.digital.repository.AlunoRepository;

@RestController
@RequestMapping("/alunos")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class AlunoController {
	
	@Autowired
	private AlunoRepository repository;
    
	//vai retornar todos os dados da tabela de alunos
	@GetMapping
	public ResponseEntity<List<Aluno>> GetAll(){
		return ResponseEntity.ok(repository.findAll());
	}
	
	// pegando o aluno pelo id
	@GetMapping("/{id}")
	public ResponseEntity<Aluno> GetById(@PathVariable long id){
		 return repository.findById(id)
		           .map(resp -> ResponseEntity.ok().body(resp))
		           .orElse(ResponseEntity.notFound().build());	
	}
	
	// pegando pelo id
	@GetMapping("/seach/{id}")
	public ResponseEntity <List<Aluno>> GetById(@PathVariable Long id){
		return ResponseEntity.ok(repository.findAllAlunosById(id));	
	}
	
	@PostMapping   //ok post para inseririr dados dos alunos
	public ResponseEntity<Aluno> postALuno (@RequestBody Aluno aluno){
		return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(aluno));
	}

}
