package me.dio.academia.digital.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import me.dio.academia.digital.entity.Matricula;


public interface MatriculaRepository extends JpaRepository<Matricula, Long>{
	public Optional<Matricula> findById(Long id);
}
