package yrr.project.gifmonitor.exception.handler;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import yrr.project.gifmonitor.exception.NotValidException;

@ControllerAdvice
public class ExceptionHandlerInvalid {
    @ExceptionHandler(NotValidException.class)
    public ResponseEntity handleException(NotValidException e) {
        // log exception
        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body(e.getMessage());
    }
}
