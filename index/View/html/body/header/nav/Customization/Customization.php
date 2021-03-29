<?php 

//Instalarea URL-ului http și https
class Installing_the_http_and_https_url
{
    protected static $_instance;
    private static $_url;

    public function get_http_or_https()
    {
        if (!empty($_SERVER['HTTPS']) && ('on' == $_SERVER['HTTPS'])) 
        {
            self::$_url = 'https://';
        } 
        else
        {
            self::$_url = 'http://';
        }
    
        return self::$_url .= $_SERVER['HTTP_HOST'];
    }

    public static function getInstaence()
    {
        if (self::$_instance == null) 
        {
            self::$_instance = new self;
        }

        self::$_url = null;

        return self::$_instance;
    } 

    private function __construct() 
    {

    }

    private function __clone()
    {
        
    }

    public function __wakeup()
    {
        
    }

}

echo Installing_the_http_and_https_url::getInstaence()->get_http_or_https();

?>



