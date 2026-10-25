package com.vedant.portfolio.service;

import com.vedant.portfolio.model.Testimonial;
import com.vedant.portfolio.repository.TestimonialRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class TestimonialService {

    private final TestimonialRepository repository;

    public TestimonialService(TestimonialRepository repository) {
        this.repository = repository;
    }

    public List<Testimonial> getApprovedTestimonials() {
        return repository.findByIsApprovedTrueOrderByCreatedAtDesc();
    }

    public List<Testimonial> getAllTestimonials() {
        return repository.findAll();
    }

    public Optional<Testimonial> getById(UUID id) {
        return repository.findById(id);
    }

    public Testimonial create(Testimonial testimonial) {
        testimonial.setId(null);
        return repository.save(testimonial);
    }

    public Optional<Testimonial> updateApproval(UUID id, boolean isApproved) {
        return repository.findById(id).map(existing -> {
            existing.setIsApproved(isApproved);
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
