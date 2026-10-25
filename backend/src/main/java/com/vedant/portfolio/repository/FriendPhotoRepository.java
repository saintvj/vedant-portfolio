package com.vedant.portfolio.repository;

import com.vedant.portfolio.model.FriendPhoto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface FriendPhotoRepository extends JpaRepository<FriendPhoto, UUID> {
    List<FriendPhoto> findAllByOrderByCreatedAtDesc();
}
