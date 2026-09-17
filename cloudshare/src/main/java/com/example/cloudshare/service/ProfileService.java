
package com.example.cloudshare.service;

import com.example.cloudshare.documents.ProfileDocument;
import com.example.cloudshare.dto.ProfileDTO;
import com.example.cloudshare.repository.ProfileRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ProfileService {

    private final ProfileRepository profileRepository;

    public ProfileDTO createProfile(ProfileDTO profileDTO) {

        ProfileDocument profile = ProfileDocument.builder()
                .id(UUID.randomUUID().toString())
                .clerkId(profileDTO.getClerkId())
                .email(profileDTO.getEmail())
                .firstName(profileDTO.getFirstName())
                .lastName(profileDTO.getLastName())
                .photoUrl(profileDTO.getPhotoUrl())
                .credits(5)
                .createdAt(Instant.now())
                .build();

        try {
            profile = profileRepository.saveAndFlush(profile);
        } catch (DataIntegrityViolationException e) {
            throw new RuntimeException("Email already exists");
        }

        return ProfileDTO.builder()
                .clerkId(profile.getClerkId())
                .email(profile.getEmail())
                .firstName(profile.getFirstName())
                .lastName(profile.getLastName())
                .photoUrl(profile.getPhotoUrl())
                .credits(profile.getCredits())
                .createdAt(profile.getCreatedAt())
                .build();
    }
}