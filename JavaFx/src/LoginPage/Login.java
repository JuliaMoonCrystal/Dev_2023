package LoginPage;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;

import javafx.application.Application;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.scene.Scene;
import javafx.scene.layout.AnchorPane;
import javafx.stage.Stage;


public class Login extends Application implements EventHandler<ActionEvent>{
	
   public static void main(String[] args) {
		Login.launch(args);
	}

	@Override
	public void start(Stage start) throws Exception {
		AnchorPane pane = new AnchorPane();
		pane.setPrefSize(500, 500);
		
		Scene cena = new Scene(pane);
		start.setScene(cena);
	    start.show();
	    
	}

	@Override
	public void handle(ActionEvent arg0) {
		// TODO Auto-generated method stub
		
	}

}
