package com.vedant.portfolio.service;

import com.vedant.portfolio.model.Project;
import com.vedant.portfolio.repository.ProjectRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class ProjectService {

    private final ProjectRepository repository;

    public ProjectService(ProjectRepository repository) {
        this.repository = repository;
    }

    public List<Project> getAllProjects() {
        return repository.findAllByOrderByDisplayOrderAsc();
    }

    public List<Project> getFeaturedProjects() {
        return repository.findByFeaturedTrueOrderByDisplayOrderAsc();
    }

    public Optional<Project> getById(UUID id) {
        return repository.findById(id);
    }

    public Project create(Project project) {
        project.setId(null);
        return repository.save(project);
    }

    public Optional<Project> update(UUID id, Project updated) {
        return repository.findById(id).map(existing -> {
            existing.setTitle(updated.getTitle());
            existing.setPunchline(updated.getPunchline());
            existing.setDescription(updated.getDescription());
            existing.setTechStack(updated.getTechStack());
            existing.setGithubUrl(updated.getGithubUrl());
            existing.setLiveUrl(updated.getLiveUrl());
            existing.setStarsCount(updated.getStarsCount());
            existing.setFeatured(updated.getFeatured());
            existing.setDisplayOrder(updated.getDisplayOrder());
            return repository.save(existing);
        });
    }

    public boolean delete(UUID id) {
        if (repository.existsById(id)) {
            repository.deleteById(id);
            return true;
        }
        return false;
    }
}
