package com.vedant.portfolio.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import java.time.LocalDate;
import java.time.OffsetDateTime;
import java.util.UUID;

@Entity
@Table(name = "friends_gallery")
public class FriendPhoto {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @NotBlank(message = "Caption is required")
    @Column(nullable = false, length = 255)
    private String caption;

    @NotBlank(message = "Image URL is required")
    @Column(nullable = false, columnDefinition = "TEXT")
    private String imageUrl;

    @Column(length = 120)
    private String location;

    private LocalDate memoryDate;

    @Column(length = 80)
    private String vibeTag = "Adventure";

    private OffsetDateTime createdAt;

    @PrePersist
    public void prePersist() {
        if (createdAt == null) {
            createdAt = OffsetDateTime.now();
        }
        if (vibeTag == null) {
            vibeTag = "Adventure";
        }
    }

    public UUID getId() { return id; }
    public void setId(UUID id) { this.id = id; }

    public String getCaption() { return caption; }
    public void setCaption(String caption) { this.caption = caption; }

    public String getImageUrl() { return imageUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }

    public String getLocation() { return location; }
    public void setLocation(String location) { this.location = location; }

    public LocalDate getMemoryDate() { return memoryDate; }
    public void setMemoryDate(LocalDate memoryDate) { this.memoryDate = memoryDate; }

    public String getVibeTag() { return vibeTag; }
    public void setVibeTag(String vibeTag) { this.vibeTag = vibeTag; }

    public OffsetDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(OffsetDateTime createdAt) { this.createdAt = createdAt; }
}
