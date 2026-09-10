package com.example.cloudshare.repository;

import com.example.cloudshare.documents.ProfileDocument;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ProfileRepository extends JpaRepository<ProfileDocument,String> {
    Optional<ProfileDocument> findByEmail(String email);
}
