package complot.dev.quickipedia_backend;

import complot.dev.quickipedia_backend.web.Controller;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.test.web.server.LocalServerPort;

import static org.assertj.core.api.Assertions.*;


@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class ControllerTest {

    @Autowired
    Controller controller;

    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    void contextLoads(){
        assertThat(controller).isNotNull();
    }

    @Test
    void helloEndpointShouldReturnHello(){
        // Arrange
        String response = "Hello!";
        // Act
        String url = this.restTemplate
                .withBasicAuth("admin", "password")
                .getForObject("http://localhost:" + port + "/api/status", String.class);
        // Act & Assert
        assertThat(url).contains(response);
    }
}