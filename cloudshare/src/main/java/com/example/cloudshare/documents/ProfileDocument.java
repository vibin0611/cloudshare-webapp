package com.example.cloudshare.documents;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class ProfileDocument {

    @Id
    private String id;

    private String clerkId;

    @Column(unique = true)
    private String email;

    private String firstName;

    private String lastName;

    private Integer credits;

    private String photoUrl;

    private Instant createdAt;
}