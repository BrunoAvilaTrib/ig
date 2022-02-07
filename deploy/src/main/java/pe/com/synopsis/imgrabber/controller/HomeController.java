package pe.com.synopsis.imgrabber.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/")
public class HomeController
{
    @Value("${ENDPOINT.API}")
    private String endpointApi;
    
    @GetMapping("/")
    public ModelAndView index() {
        ModelAndView model = new ModelAndView("index");
        model.addObject("ENDPOINT_API", endpointApi);
        return model;
    }
}
