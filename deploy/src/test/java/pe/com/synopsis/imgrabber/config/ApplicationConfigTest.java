
package pe.com.synopsis.imgrabber.config;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.web.context.WebApplicationContext;
import org.thymeleaf.spring5.SpringTemplateEngine;
import org.thymeleaf.templateresolver.ClassLoaderTemplateResolver;

import pe.com.synopsis.imgrabber.BootApplication;

@RunWith(SpringJUnit4ClassRunner.class)
@TestPropertySource(properties = { "ig.folder=/otp/ig" })
@ContextConfiguration(classes = { BootApplication.class })
@WebAppConfiguration
public class ApplicationConfigTest
{

    @Autowired
    private WebApplicationContext wac;

    @Before
    public void setup() throws Exception
    {
    }
    
    @Test
    public void whenValidBeans_thenReturnsOk() throws Exception
    {
        Assert.assertNotNull(wac.getBean(ClassLoaderTemplateResolver.class));
        Assert.assertNotNull(wac.getBean(SpringTemplateEngine.class));
        Assert.assertNotNull(wac.getBean("viewResolver"));
        
    }
}
