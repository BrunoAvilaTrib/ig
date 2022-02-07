
package pe.com.synopsis.imgrabber.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Description;
import org.springframework.context.annotation.PropertySource;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.thymeleaf.spring5.SpringTemplateEngine;
import org.thymeleaf.spring5.view.ThymeleafViewResolver;
import org.thymeleaf.templateresolver.ClassLoaderTemplateResolver;

@Configuration
@PropertySource(value = { "file://${ig.folder}/config/ig-base.properties",
"file://${ig.folder}/config/ig-web-app.properties" })
public class ApplicationConfig implements WebMvcConfigurer
{
    private static final String PATH_TEMPLATES_THYMELEAF = "templates/";
    private static final String SUFFIX_HTML_THYMELEAF = ".html";
    private static final String ENCODING_UTF_8 = "UTF-8";
    
    @Bean
    @Description("Thymeleaf template resolver serving HTML 5")
    public ClassLoaderTemplateResolver templateResolver() {

        ClassLoaderTemplateResolver templateResolver = new ClassLoaderTemplateResolver();

        templateResolver.setPrefix(PATH_TEMPLATES_THYMELEAF);
        templateResolver.setCacheable(false);
        templateResolver.setSuffix(SUFFIX_HTML_THYMELEAF);
        templateResolver.setTemplateMode("HTML");
        templateResolver.setCharacterEncoding(ENCODING_UTF_8);

        return templateResolver;
    }

    @Bean
    @Description("Thymeleaf template engine with Spring integration")
    public SpringTemplateEngine templateEngine() {

        SpringTemplateEngine templateEngine = new SpringTemplateEngine();
        templateEngine.setTemplateResolver(templateResolver());

        return templateEngine;
    }

    @Bean
    @Description("Thymeleaf view resolver")
    public ViewResolver viewResolver() {

        ThymeleafViewResolver viewResolver = new ThymeleafViewResolver();

        viewResolver.setTemplateEngine(templateEngine());
        viewResolver.setCharacterEncoding(ENCODING_UTF_8);

        return viewResolver;
    }
}
