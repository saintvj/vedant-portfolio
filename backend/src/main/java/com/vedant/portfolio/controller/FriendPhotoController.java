package com.vedant.portfolio.controller;

import com.vedant.portfolio.model.FriendPhoto;
import com.vedant.portfolio.service.FriendPhotoService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/api")
public class FriendPhotoController {

    private final FriendPhotoService service;

    public FriendPhotoController(FriendPhotoService service) {
        this.service = service;
    }

    @GetMapping("/friends-gallery")
    public ResponseEntity<List<FriendPhoto>> getAllPhotos() {
        return ResponseEntity.ok(service.getAllPhotos());
    }

    @GetMapping("/friends-gallery/{id}")
    public ResponseEntity<FriendPhoto> getById(@PathVariable UUID id) {
        return service.getById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/friends-gallery")
    public ResponseEntity<FriendPhoto> create(@Valid @RequestBody FriendPhoto photo) {
        FriendPhoto created = service.create(photo);
        return ResponseEntity.status(HttpStatus.CREATED).body(created);
    }

    @DeleteMapping("/friends-gallery/{id}")
    public ResponseEntity<Void> delete(@PathVariable UUID id) {
        if (service.delete(id)) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }

    @GetMapping("/health")
    public ResponseEntity<Map<String, Object>> health() {
        return ResponseEntity.ok(Map.of(
                "status", "UP",
                "service", "vedant-portfolio-backend",
                "persona", "live-like-its-your-last-day",
                "timestamp", System.currentTimeMillis()
        ));
    }
}
