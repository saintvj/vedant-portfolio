package com.vedant.portfolio.service;

import com.vedant.portfolio.model.FriendPhoto;
import com.vedant.portfolio.repository.FriendPhotoRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class FriendPhotoService {

    private final FriendPhotoRepository repository;

    public FriendPhotoService(FriendPhotoRepository repository) {
        this.repository = repository;
    }

    public List<FriendPhoto> getAllPhotos() {
        return repository.findAllByOrderByCreatedAtDesc();
    }

    public Optional<FriendPhoto> getById(UUID id) {
        return repository.findById(id);
    }

    public FriendPhoto create(FriendPhoto photo) {
        photo.setId(null);
        return repository.save(photo);
    }

    public boolean delete(UUID id) {
        if (repository.existsById(id)) {
            repository.deleteById(id);
            return true;
        }
        return false;
    }
}
