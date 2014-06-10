/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
                $('a').click(function(){
                    $('img').css("width", "500px").css("height","500px");
                    $('a').after('<h1>fechar</h1>');
                    $('h1').click(function(){
                        $('img').css('width', '200px').css('height', '200px');
                        $('h1').hide();
                    });
                });
            });
