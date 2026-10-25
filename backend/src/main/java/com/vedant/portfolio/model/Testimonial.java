package com.vedant.portfolio.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import java.time.OffsetDateTime;
import java.util.UUID;

@Entity
@Table(name = "testimonials")
public class Testimonial {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @NotBlank(message = "Author name is required")
    @Column(nullable = false, length = 120)
    private String authorName;

    @NotBlank(message = "Author role is required")
    @Column(nullable = false, length = 150)
    private String authorRole;

    @Column(length = 150)
    private String company;

    @Column(columnDefinition = "TEXT")
    private String avatarUrl;

    @NotBlank(message = "Content cannot be empty")
    @Column(nullable = false, columnDefinition = "TEXT")
    private String content;

    @Min(1)
    @Max(5)
    private Integer rating = 5;

    @Column(length = 80)
    private String relationshipTag = "Colleague";

    private Boolean isApproved = true;

    private OffsetDateTime createdAt;

    @PrePersist
    public void prePersist() {
        if (createdAt == null) {
            createdAt = OffsetDateTime.now();
        }
        if (rating == null) {
            rating = 5;
        }
        if (isApproved == null) {
            isApproved = true;
        }
    }

    public UUID getId() { return id; }
    public void setId(UUID id) { this.id = id; }

    public String getAuthorName() { return authorName; }
    public void setAuthorName(String authorName) { this.authorName = authorName; }

    public String getAuthorRole() { return authorRole; }
    public void setAuthorRole(String authorRole) { this.authorRole = authorRole; }

    public String getCompany() { return company; }
    public void setCompany(String company) { this.company = company; }

    public String getAvatarUrl() { return avatarUrl; }
    public void setAvatarUrl(String avatarUrl) { this.avatarUrl = avatarUrl; }

    public String getContent() { return content; }
    public void setContent(String content) { this.content = content; }

    public Integer getRating() { return rating; }
    public void setRating(Integer rating) { this.rating = rating; }

    public String getRelationshipTag() { return relationshipTag; }
    public void setRelationshipTag(String relationshipTag) { this.relationshipTag = relationshipTag; }

    public Boolean getIsApproved() { return isApproved; }
    public void setIsApproved(Boolean approved) { isApproved = approved; }

    public OffsetDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(OffsetDateTime createdAt) { this.createdAt = createdAt; }
}
