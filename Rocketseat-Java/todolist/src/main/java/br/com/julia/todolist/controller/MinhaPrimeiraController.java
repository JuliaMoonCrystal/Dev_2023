package br.com.julia.todolist.controller;
import org.springframework.web.bind.annotation.RestController;

@RestController //recomendado para apis
public class MinhaPrimeiraController {

    public String primeiraMensagem(){
        return "Funcionou";
        
    }
}
