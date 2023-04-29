package me.dio.academia.digital.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import me.dio.academia.digital.entity.AvaliacaoFisica;

public interface AvaliacaoFisicaRepository extends JpaRepository<AvaliacaoFisica, Long>{
	public List<AvaliacaoFisica> findAllAvaliacoesById(Long id);

}
