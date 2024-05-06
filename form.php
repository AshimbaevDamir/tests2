<?php 

if ( isset ( $_POST [ 'submit' ])){
 // получение и сохранение входных данных в переменных 
    $number = $_POST [ 'numberInput' ];
     $Costumer = $_POST [ 'CostumerInput' ];
     $date1 = $_POST [ 'Date1Input' ]; 
     $date2 = $_POST [ 'Date2Input' ]; 
     
     $username = "hansafle_ashimbaev" ;
     $пароль = "!Njhn2409" ;
     $dbname = "hansafle_cylinders" ;  
     $con = mysqli_connect ( $host , $username , $password , $dbname );
     if (! $con ) 
    { die ( "Соединение не удалось!" . mysqli_connect_error ()); 
    }
     $sql = "INSERT INTO contactform_entries (id, number_fld, status_fld, getdate_fld, outdate_fld, ready_fld) VALUES ('0', ' $number ', ' $Costumer ', ' $date1 ', '$date2')" ; //запускаем запрос на сохранение записей и проверяем их с помощью оператора 
     if $rs = mysqli_query ( $con , $sql );
     if ( $rs ) 
    { echo "Сообщение успешно отправлено!" ; 
    } else {
         echo "Ошибка, сообщение не отправлено! Что-то не так." ; 
    } //соединение закрыто. 
    mysqli_close ( $con ); 
} ?>